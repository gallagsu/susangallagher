import Foundation
import ImageIO
import UniformTypeIdentifiers

guard CommandLine.arguments.count == 3 else {
  fputs("Usage: convert-to-webp <input> <output>\n", stderr)
  exit(1)
}

let inputURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2])

guard let source = CGImageSourceCreateWithURL(inputURL as CFURL, nil),
      let image = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
  fputs("Failed to read input image: \(inputURL.path)\n", stderr)
  exit(1)
}

guard let destination = CGImageDestinationCreateWithURL(
  outputURL as CFURL,
  UTType.webP.identifier as CFString,
  1,
  nil
) else {
  fputs("Failed to create WebP destination: \(outputURL.path)\n", stderr)
  exit(1)
}

let properties: CFDictionary = [
  kCGImageDestinationLossyCompressionQuality: 0.88
] as CFDictionary

CGImageDestinationAddImage(destination, image, properties)

if !CGImageDestinationFinalize(destination) {
  fputs("Failed to write WebP image: \(outputURL.path)\n", stderr)
  exit(1)
}
