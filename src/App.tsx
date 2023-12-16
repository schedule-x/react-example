import './App.css'
import { useCalendarApp, Calendar } from "@schedule-x/react";
import { viewWeek, viewDay, viewMonthGrid, viewMonthAgenda } from "@schedule-x/calendar";
import {createEventModalPlugin} from "@schedule-x/event-modal";
import {createDragAndDropPlugin} from "@schedule-x/drag-and-drop";

// Remember to also set your styles to the wrapper element .sx-react-calendar-wrapper
// For example:
// .sx-react-calendar-wrapper {
//   width: 100%;
//   height: 800px;
//   max-height:90vh;
// }
//
// For best mobile experience, you might consider 100vw and 100% of the container element's height
import '@schedule-x/theme-default/dist/index.css';

function App() {
  const calendar = useCalendarApp({
    locale: 'zh-CN',
    selectedDate: '2023-12-16',
    defaultView: viewMonthGrid.name,
    views: [
      viewDay,
      viewWeek,
      viewMonthGrid,
      viewMonthAgenda
    ],
    plugins: [
      createEventModalPlugin(),
      createDragAndDropPlugin()
    ],
    events: [
      {
        id: "1",
        title: "Event 1",
        time: {
          start: '2023-12-16',
          end: '2023-12-16'
        }
      }
    ]
  });

  return (
    <div>
      <Calendar calendarApp={calendar} />
    </div>
  )
}

export default App
