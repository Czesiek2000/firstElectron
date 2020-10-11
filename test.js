const os = require('os-utils');
const cp = require('child_process');

// CPU usage
const cpu = document.getElementById('cpu');
const usage = document.createElement('div');
usage.classList.add('usage');
const cpuDiv = document.createElement('div');
cpuDiv.classList.add('cpu-title');
cpuDiv.innerText = "CPU Usage: ";
cpu.appendChild(cpuDiv);
cpu.appendChild(usage);

setInterval(() => {
    os.cpuUsage((v) => {
        usage.innerHTML = Math.ceil(v * 100) + ' %';
    })
    
}, 1000);

// Free CPU usage
const freeCpu = document.createElement('div');
const desc = document.createElement('span');
desc.classList.add('description');
desc.innerText = 'Cpu Free: ';
cpu.appendChild(desc);
freeCpu.classList.add('usage');
cpu.appendChild(freeCpu);

setInterval(function() {
    os.cpuFree(function(v) {
        freeCpu.innerHTML = Math.ceil(v * 100) + ' %';
    })
}, 1000);

// Used memory
const mem = document.getElementById('mem');
const usageMem = document.createElement('div');
const memDesc = document.createElement('span');
memDesc.innerText = 'Used Mem: ';
memDesc.classList.add('description');
usageMem.classList.add('mem-usage');
usageMem.style.marginTop = "20px";
mem.appendChild(memDesc);
mem.appendChild(usageMem);

setInterval(function() {
    usageMem.innerHTML = ((os.totalmem() - os.freemem()) / 1000).toFixed(1) + ' GB';
}, 1000);

// Available memory in percentage
const percentage = document.createElement('div');
const value = document.createElement('div');
percentage.innerText = "Free Mem: ";
percentage.style.marginTop = "20px";
percentage.classList.add('cpu-title');
value.classList.add('cpu-title');
value.style.marginTop = "20px";
mem.appendChild(percentage);
mem.appendChild(value)
setInterval(function() {
    value.innerHTML = ((os.freemem()) / 1000).toFixed(1) + ' GB';
}, 1000);
