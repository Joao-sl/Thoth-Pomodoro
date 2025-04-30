import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { ContentWrapper } from '../../components/ContentWrapper';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <ContentWrapper>
        <Logo />
        <Menu />
        {children}
        <Footer />
      </ContentWrapper>
    </>
  );
}
