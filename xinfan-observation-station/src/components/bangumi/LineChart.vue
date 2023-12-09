<template>
    <div>
        <h1>网站流量</h1>
        <canvas ref="chartCanvas" :width="width" :height="height"></canvas>
    </div>
</template>
  
<script>
export default {
    props: {
        data: {
            type: Array,
            required: true,
        },
        xAxisLabels: {
            type: Array,
            required: true,
        },
        width: {
            type: Number,
            default: 1000,
        },
        height: {
            type: Number,
            default: 300,
        },
    },
    mounted() {
        this.drawChart();
    },
    methods: {
        drawChart() {
            const canvas = this.$refs.chartCanvas;
            const ctx = canvas.getContext("2d");

            // 清空画布
            ctx.clearRect(0, 0, this.width, this.height);

            // 计算数据点之间的间隔
            const dataPointsCount = this.data.length;
            const intervalX = this.width / (dataPointsCount - 1);

            // 计算数据的最大值和最小值
            const maxY = Math.max(...this.data);
            const minY = Math.min(...this.data);

            // 计算数据点的纵向缩放比例
            const scaleY = (this.height-50) / (maxY - minY);

            // 计算竖轴刻度的值和间隔
            const yTickCount = 5; // 可以根据需要调整刻度数量
            const yTickInterval = (maxY - minY) / (yTickCount - 1);

            // 开始绘制坐标系
            ctx.beginPath();
            ctx.moveTo(40, 10);
            ctx.lineTo(40, this.height - 20);
            ctx.lineTo(this.width - 10, this.height - 20);
            ctx.strokeStyle = "black";
            ctx.stroke();

            // 绘制坐标刻度和数值
            for (let i = 0; i < dataPointsCount; i++) {
                const x = i * intervalX + 40;
                const y = this.height - 20 - (this.data[i] - minY) * scaleY;

                // 绘制竖直刻度线
                ctx.beginPath();
                ctx.moveTo(x, this.height - 20);
                ctx.lineTo(x, this.height - 15);
                ctx.strokeStyle = "black";
                ctx.stroke();

                // 绘制横向刻度线
                ctx.beginPath();
                ctx.moveTo(40, y);
                ctx.lineTo(45, y);
                ctx.strokeStyle = "black";
                ctx.stroke();

                // 在坐标上显示数值
                ctx.fillStyle = "black";
                ctx.fillText(this.data[i], x - 10, y - 5);
            }

            // 在横轴上显示自定义标签
            for (let i = 0; i < this.xAxisLabels.length; i++) {
                const x = i * intervalX + 40;
                const y = this.height - 5;
                ctx.fillStyle = "black";
                ctx.fillText(this.xAxisLabels[i], x, y);
            }

            // 在竖轴上显示刻度和数值
            for (let i = 0; i < yTickCount; i++) {
                const yValue = minY + i * yTickInterval;
                const y = this.height - 20 - (yValue - minY) * scaleY;
                ctx.beginPath();
                ctx.moveTo(40, y);
                ctx.lineTo(45, y);
                ctx.strokeStyle = "black";
                ctx.stroke();

                ctx.fillStyle = "black";
                ctx.fillText(yValue.toFixed(2), 10, y + 5);
            }

            // 开始绘制折线
            ctx.beginPath();
            ctx.moveTo(40, this.height - 20 - (this.data[0] - minY) * scaleY);

            for (let i = 1; i < dataPointsCount; i++) {
                const x = i * intervalX + 40;
                const y = this.height - 20 - (this.data[i] - minY) * scaleY;
                ctx.lineTo(x, y);
            }

            // 设置线的样式
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 2;

            // 绘制线
            ctx.stroke();
        },
    },
    watch: {
        data: "drawChart",
        xAxisLabels: "drawChart",
    },
};
</script>
  
<style scoped>
/* 添加样式，例如设置画布的边框等 */
</style>
  