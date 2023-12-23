<template>
    <div class="word-cloud">
      <div v-for="(line, lineIndex) in wordLines" :key="lineIndex" class="word-line">
        <span
          v-for="(word, wordIndex) in line"
          :key="wordIndex"
          :style="getWordStyle()"
          @click="handleWordClick(word)"
        >
          {{ word.text }}
        </span>
      </div>
    </div>
    <button @click="generateWordLines()">生成词云(多次按下可以生成不同样式)</button>
  </template>
  
  <script>
  export default {
    props:{
        words: Array
    },
    data() {
      return {
        wordLines: [], // Array to store lines of words
        maxLineLength: 30, // Maximum number of words in a line
      };
    },
    mounted() {
      this.generateWordLines();
    },
    methods: {
      generateWordLines() {
        this.wordLines = []
        let currentLine = [];
        let currentLineLength = 0;
  
        this.words.forEach((word) => {
          const wordLength = this.calculateWordLength(word);
  
          if (currentLineLength + wordLength <= this.maxLineLength) {
            currentLine.push(word);
            currentLineLength += wordLength;
          } else {
            this.wordLines.push([...currentLine]);
            currentLine = [word];
            currentLineLength = wordLength;
          }
        });
  
        if (currentLine.length > 0) {
          this.wordLines.push([...currentLine]);
        }
      },
      calculateWordLength(word) {
        // You may want to customize this based on your styling
        return word.text.length;
      },
      getWordStyle() {
        const randomColor = this.getRandomColor();
        const fontSize = Math.floor(Math.random() * (2.5 - 1 + 1)) + 1; // Random font size between 1 and 2.5
        return {
          fontSize: `${fontSize}em`,
          color: randomColor,
          cursor: 'pointer',
          margin: '5px',
          display: 'inline-block',
        };
      },
      getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      },
      handleWordClick(word) {
        // Handle the word click event as needed
        console.log(`Clicked on word: ${word.text}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .word-cloud {
    text-align: center;
  }
  
  .word-line {
    white-space: nowrap;
    margin-bottom: 10px;
  }
  
  /* Add additional styling as needed */
  </style>
  