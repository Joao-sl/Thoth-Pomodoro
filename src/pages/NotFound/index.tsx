import { DefaultHtml } from '../../components/DefaultHtml';
import { Heading } from '../../components/Heading/Heading';
import { MyRouterLink } from '../../components/RouterLink';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <DefaultHtml>
        <Heading>Page Not Found - 404 👻</Heading>
        <p>
          Sorry, this page doesn't exist or may have been moved. You can go to the{' '}
          <MyRouterLink href='/'>Home</MyRouterLink> to start again, or check your tasks
          history&nbsp;
          <MyRouterLink href='/history'>history</MyRouterLink>
        </p>
        <p>
          If you want learn how the pomodoro technique and site work you can to&nbsp;
          <MyRouterLink href='/learn-pomodoro'>Learn about pomodoro</MyRouterLink>
        </p>
      </DefaultHtml>
    </MainTemplate>
  );
}
