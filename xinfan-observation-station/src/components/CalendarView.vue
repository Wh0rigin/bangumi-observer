<template>
    <div class="calendar-container">
      <h2 class="header">{{ currentMonth }} {{ currentYear }}</h2>
      <div class="month-switch">
        <button @click="prevMonth" class="nav-button">&#60;</button>
        <button @click="nextMonth" class="nav-button">&#62;</button>
      </div>
      <table class="calendar-table">
        <thead>
          <tr>
            <th v-for="day in daysOfWeek" :key="day" class="day-header">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in calendar" :key="index">
            <td
              v-for="day in week"
              :key="day.date"
              :class="{ 'prev-month': day.prevMonth, 'current-day': isCurrentDay(day) }"
              class="calendar-cell"
            >
              {{ day.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "CalendarView",
    props: {
      year: {
        type: Number,
        required: true,
      },
      month: {
        type: Number,
        required: true,
      },
      day: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        currentYear: this.year,
        currentMonth: this.month,
        currentDay: this.day,
        daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      };
    },
    computed: {
      calendar() {
        const firstDayOfMonth = new Date(this.currentYear, this.currentMonth - 1, 1);
        const lastDayOfMonth = new Date(this.currentYear, this.currentMonth, 0);
        const firstDayOfWeek = firstDayOfMonth.getDay();
        const lastDateOfMonth = lastDayOfMonth.getDate();
        const calendar = [];
        let currentDate = 1;
  
        for (let i = 0; i < 6; i++) {
          const week = [];
  
          for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDayOfWeek) || currentDate > lastDateOfMonth) {
              week.push({ date: "", prevMonth: true });
            } else {
              week.push({ date: currentDate, prevMonth: false });
              currentDate++;
            }
          }
  
          calendar.push(week);
        }
  
        return calendar;
      },
    },
    methods: {
      prevMonth() {
        this.currentMonth -= 1;
        if (this.currentMonth === 0) {
          this.currentMonth = 12;
          this.currentYear -= 1;
        }
      },
      nextMonth() {
        this.currentMonth += 1;
        if (this.currentMonth === 13) {
          this.currentMonth = 1;
          this.currentYear += 1;
        }
      },
      isCurrentDay(day) {
        console.log(this.currentMonth+":"+new Date().month);
        return day.date === this.currentDay && !day.prevMonth && this.currentMonth === this.month && this.currentYear === this.year;
      },
    },
  };
  </script>
  
  <style scoped>
  .calendar-container {
    max-width: 400px;
    margin: 0 auto;
    background-color: white;
    font-family: "Arial", sans-serif;
  }
  
  .header {
    text-align: center;
    margin-bottom: 10px;
    color: #333;
  }
  
  .calendar-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .day-header {
    background-color: #87ceeb;
    color: #fff;
    text-align: center;
    padding: 8px;
  }
  
  .calendar-cell {
    text-align: center;
    padding: 10px;
    cursor: pointer;
  }
  
  .prev-month {
    color: #808080;
  }
  
  .current-day {
    background-color: #87ceeb;
    color: #fff;
    border-radius: 50%;
  }
  
  .month-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  
  .nav-button {
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
    margin: 0 10px;
  }
  </style>
  