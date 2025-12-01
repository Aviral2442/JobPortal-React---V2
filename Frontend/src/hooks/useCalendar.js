import { useState } from 'react';
const defaultEvents = [{
  id: '1',
  title: 'Interview - Backend Engineer',
  start: new Date(),
  end: new Date(),
  className: 'bg-transparent text-body border rounded border-light fw-medium'
}, {
  id: '2',
  title: 'Design Sprint Planning',
  start: new Date(Date.now() + 16000000),
  end: new Date(Date.now() + 20000000),
  className: 'bg-transparent text-body border rounded border-light fw-medium'
}, {
  id: '3',
  title: 'Project Kick-off Meeting',
  start: new Date(Date.now() + 400000000),
  end: new Date(Date.now() + 440000000),
  className: 'bg-transparent text-body border rounded border-light fw-medium'
}, {
  id: '4',
  title: 'UI/UX Design Review',
  start: new Date(Date.now() + 80000000),
  end: new Date(Date.now() + 180000000),
  className: 'bg-transparent text-body border rounded border-light fw-medium'
}, {
  id: '5',
  title: 'Code Review - Frontend',
  start: new Date(Date.now() + 200000000),
  end: new Date(Date.now() + 220000000),
  className: 'bg-transparent text-body border rounded border-light fw-medium'
}, {
  id: '6',
  title: 'Team Stand-up Meeting',
  start: new Date(Date.now() + 340000000),
  end: new Date(Date.now() + 345000000),
  className: 'bg-transparent text-body border rounded border-light fw-medium'
}, {
  id: '7',
  title: 'Client Presentation Prep',
  start: new Date(Date.now() + 1200000000),
  end: new Date(Date.now() + 1300000000),
  className: 'bg-transparent text-body border rounded border-light fw-medium'
}, {
  id: '8',
  title: 'Backend API Integration',
  start: new Date(Date.now() + 2500000000),
  end: new Date(Date.now() + 2600000000),
  className: 'bg-transparent text-body border rounded border-light fw-medium'
}];
const useCalendar = () => {
  const [show, setShow] = useState(false);
  const onOpenModal = () => setShow(true);
  const [isEditable, setIsEditable] = useState(false);
  const [events, setEvents] = useState([...defaultEvents]);
  const [eventData, setEventData] = useState();
  const [dateInfo, setDateInfo] = useState();
  const onCloseModal = () => {
    setEventData(undefined);
    setDateInfo(undefined);
    setShow(false);
  };
  const onDateClick = arg => {
    setDateInfo(arg);
    onOpenModal();
    setIsEditable(false);
  };
  const onEventClick = arg => {
    const event = {
      id: arg.event.id,
      title: arg.event.title
    };
    setEventData(event);
    setIsEditable(true);
    onOpenModal();
  };
  const onDrop = arg => {
    const dropEventData = arg;
    const title = dropEventData.draggedEl.title;
    if (title) {
      const newEvent = {
        id: dropEventData.draggedEl.id,
        title,
        start: dropEventData ? dropEventData.dateStr : new Date(),
        className: dropEventData.draggedEl.dataset.class
      };
      const modifiedEvents = [...events];
      modifiedEvents.push(newEvent);
      setEvents(modifiedEvents);
    }
  };
  const onAddEvent = data => {
    const modifiedEvents = [...events];
    const event = {
      id: String(modifiedEvents.length + 1),
      title: data.title,
      start: Object.keys(dateInfo ?? {}).length !== 0 ? dateInfo?.date : new Date(),
      className: 'bg-transparent text-body border rounded border-light fw-medium'
    };
    modifiedEvents.push(event);
    setEvents(modifiedEvents);
    onCloseModal();
  };
  const onUpdateEvent = data => {
    setEvents(events.map(e => {
      if (e.id === eventData?.id) {
        return {
          ...e,
          title: data.title
        };
      } else {
        return e;
      }
    }));
    onCloseModal();
    setIsEditable(false);
  };
  const onRemoveEvent = () => {
    const modifiedEvents = [...events];
    const idx = modifiedEvents.findIndex(e => e.id === eventData?.id);
    modifiedEvents.splice(idx, 1);
    setEvents(modifiedEvents);
    onCloseModal();
  };
  const onEventDrop = arg => {
    const modifiedEvents = [...events];
    const idx = modifiedEvents.findIndex(e => e.id === arg.event.id);
    modifiedEvents[idx].title = arg.event.title;
    modifiedEvents[idx].className = arg.event.classNames;
    modifiedEvents[idx].start = arg.event.start;
    modifiedEvents[idx].end = arg.event.end;
    setEvents(modifiedEvents);
    setIsEditable(false);
  };
  const createNewEvent = () => {
    setIsEditable(false);
    onOpenModal();
  };
  return {
    createNewEvent,
    show,
    onDateClick,
    onEventClick,
    onDrop,
    onEventDrop,
    events,
    onCloseModal,
    isEditable,
    eventData,
    onUpdateEvent,
    onRemoveEvent,
    onAddEvent
  };
};
export default useCalendar;