import { Footer } from "@/components/home/footer";
import { getFooterNav, getPrimaryNav, type SiteNavKey } from "@/components/home/home.data";
import { Header } from "@/components/home/header";
import { MotionOrchestrator } from "@/components/home/motion-orchestrator";
import homeStyles from "@/components/home/homepage.module.css";

type SiteShellProps = {
  children: React.ReactNode;
  activeNav?: SiteNavKey;
  borderlessFooter?: boolean;
};

export function SiteShell({
  children,
  activeNav = null,
  borderlessFooter = false,
}: SiteShellProps) {
  return (
    <div className={homeStyles.pageShell} id="top">
      <MotionOrchestrator />
      <Header items={getPrimaryNav(activeNav)} brandHref="/" />
      <main className={homeStyles.main}>{children}</main>
      <Footer
        items={getFooterNav(activeNav)}
        brandHref="/"
        borderless={borderlessFooter}
      />
    </div>
  );
}
