import { useState } from 'react';
import Calendar from 'react-calendar';

export function CalendarIndex() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue){
    setValue(nextValue)
  }

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}


