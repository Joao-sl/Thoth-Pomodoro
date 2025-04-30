import JapaneseAlarm from '../assets/audios/JapaneseAlarmEdited.mp3';
import NatureAlarm from '../assets/audios/NatureAlarmEdited.mp3';

export function loadJapaneseAlarm() {
  const audio = new Audio(JapaneseAlarm);
  audio.load();

  return () => {
    // it's just to fix the safari bug
    audio.play();
  };
}

export function loadNatureAlarm() {
  const audio = new Audio(NatureAlarm);
  audio.load();

  return () => {
    // it's just to fix the safari bug
    audio.play();
  };
}
