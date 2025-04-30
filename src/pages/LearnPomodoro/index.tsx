import { CoffeeIcon, RockingChair, TargetIcon } from 'lucide-react';
import { DefaultHtml } from '../../components/DefaultHtml';
import { Heading } from '../../components/Heading/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { MyRouterLink } from '../../components/RouterLink';

export function LearnPomodoro() {
  return (
    <MainTemplate>
      <DefaultHtml>
        <Heading>Pomodoro Technique 🍅</Heading>
        <p>
          The Pomodoro Technique is a time management method developed by Francesco Cirillo in the
          late 1980s. It uses a kitchen timer to break work into intervals, typically 25 minutes in
          length, separated by short breaks. Each interval is known as a pomodoro, from the Italian
          word for tomato, after the tomato-shaped kitchen timer that Cirillo used while a
          university student.
        </p>

        <h2>The original technique has six steps</h2>
        <p>
          1️⃣ Decide on the task to be done. <br /> <br />
          2️⃣ Set the Pomodoro timer (typically for 25 minutes). <br /> <br />
          3️⃣ Work on the task. <br /> <br />
          4️⃣ End work when the timer rings and take a short break (typically 5–10 minutes). <br />{' '}
          <br />
          5️⃣ Go back to Step 2 andrepeat until you complete four pomodori. <br />
          <br />
          6️⃣ After four pomodori are done, take a long break (typically 20 to 30 minutes) instead of
          a short break. Once the long break is finished, return to step 2. <br /> <br />
          Source:{' '}
          <a
            href='https://en.wikipedia.org/wiki/Pomodoro_Technique#cite_note-Cirillo-1'
            target='_blank'
          >
            Wikipedia
          </a>
        </p>

        <h2>How Thoth Pomodoro works 🚀</h2>
        <p>
          Our app follows the original concept, but with some improvements and customizations to
          make the process even more efficient.
        </p>

        <h3>⚙️ Customizing time</h3>
        <p>
          You can set your focus, short rest, and long rest time to whatever you want! Just go to
          the <MyRouterLink href='/history'>settings</MyRouterLink> page and adjust the minutes to
          your liking.
        </p>

        <h3>🔁 Cycles organized in sequence</h3>
        <p>
          With each completed cycle, a new task is automatically added to your history, and the app
          suggests the next cycle (target or rest).
        </p>

        <h3>🔄 Cycle visualization</h3>
        <p>Just below the timer, you will see icons representing the cycles</p>
        <ul>
          <li className='target'>
            <TargetIcon />
            &nbsp;- Do your Task
          </li>
          <li className='smallBreak'>
            <CoffeeIcon /> &nbsp;- Short Break
          </li>
          <li className='longBreak'>
            <RockingChair /> &nbsp;- Long Break
          </li>
        </ul>

        <h3>📊 Automatic history</h3>
        <p>
          All your completed tasks and cycles are saved in the{' '}
          <MyRouterLink href='/settings'>history</MyRouterLink>, with the status of completed or
          interrupted. This way, you can track your progress over time.
        </p>
      </DefaultHtml>
    </MainTemplate>
  );
}
