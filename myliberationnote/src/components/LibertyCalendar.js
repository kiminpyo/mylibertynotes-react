import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugi
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
const LibertyCalendar = ({ events }) => {
    const navigate = useNavigate();
    const handleDateClick = (arg) => {
        console.log(arg);
        return navigate(`/liberty/${arg.event.id}`);
    };
    const headerToolbar = {
        right: "prev,next today",
    };

    return (
        <div style={{ fontSize: "2rem" }}>
            <FullCalendar
                headerToolbar={headerToolbar}
                contentHeight={"500px"}
                events={events}
                plugins={[dayGridPlugin]}
                eventClick={handleDateClick}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                eventTextColor="white"
                eventBackgroundColor="black"
                eventBorderColor="black"
            />
        </div>
    );
};

export default LibertyCalendar;

const MycustomButton = styled.button`
    background-color: red;
`;
