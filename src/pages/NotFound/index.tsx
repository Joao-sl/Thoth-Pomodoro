import { DefaultHtml } from '../../components/DefaultHtml';
import { Heading } from '../../components/Heading/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <DefaultHtml>
        <Heading>Page Not Found - 404 👻</Heading>
        <p>
          Sorry, this page doesn't exist or may have been moved. You can go to
          the <a href='#'>Home</a> to start again, or check your tasks
          history&nbsp;
          <a href='#'>history</a>
        </p>
        <p>
          If you want learn how the pomodoro technique and site work you can
          to&nbsp;
          <a href='#'>Learn about pomodoro</a>
        </p>
      </DefaultHtml>
    </MainTemplate>
  );
}
