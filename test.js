const os = require('os-utils');
// console.log(os.networkIterface);
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.totalmem());
// console.log("Total memory avaible: " + (bytesAvailable / 1048576) + " MB");
// console.log(os.type());
// console.log(os.platform());

// os.cpuUsage(function(v){
// //console.log('CPU Usage (%): ' + v * 100);
// //console.log('CPU Usage (%): ' + v * 100 );
// console.log('CPU Usage (%): ' + v.toFixed(3) * 100 );
// });

// os.cpuFree(function(v){
// console.log('CPU Free: ' + v * 100 );
// console.log('CPU Free: ' + v * 100 );
// console.log('CPU Free: ' + v * 100 );
// });

// console.log('Platform ' + os.platform());
// console.log('number of cpu ' + os.cpuCount());
// console.log('free mem ' + os.freemem() / 1000 + ' GB');
// console.log('total mem ' + os.totalmem());
// console.log('percent of total mem ' + os.freememPercentage() * 100);
//console.log('computer is running for: ' + os.sysUptime());
// console.log('process running for ' + os.processUptime() / 1000);
// console.log(os.loadavg(1));
// console.log(os.loadavg(5));
// console.log(os.loadavg(15));

// console.log('\n');

// var spawn = require('child_process').spawn;

// temp = spawn('cat', ['/sys/class/thermal/thermal_zone0/temp']);

// temp.stdout.on('data', function(data) {
//     console.log('Result: ' + data/1000 + ' degrees Celcius');
// });
// console.log('')


//let root = document.getElementById('root');
// console.log(os.totalmem());
// console.log(os.freememPercentage() * 10);
// console.log(" Usage mem : " + (os.totalmem() - os.freemem()) / 1000);

// usedMem = ((os.totalmem() - os.freemem()) / 1000 ).toFixed(3)
// setInterval(function() {
    
    // os.cpuUsage(function(v){
//     root.innerHTML = "Used mem" + usedMem;
//     root.innerText = "Mem percentage: " + (os.freememPercentage() * 100).toFixed(3)
//     console.log("Mem percentage: " + (os.freememPercentage() * 100).toFixed(3));
//     // console.log(" Usage mem : " + usedMem);
// });

// }, 1000 );

// cpu usage
var cpu = document.getElementById('cpu');
var usage = document.createElement('div');
usage.classList.add('usage');
cpu.appendChild(usage);

setInterval(function() {

os.cpuUsage(function(v){
    // usage.innerHTML = v.toFixed(3) * 100; 
    usage.innerHTML = Math.ceil(v * 100) + ' %';
     //console.log( 'CPU Usage (%): ' + v.toFixed(3) * 100); // wyswietla liczby po przecinku
     //console.log(Math.round(v.toFixed(3) * 100)); // działa w miare dobrze
     //console.log(Math.ceil(v * 100)); // działa dobrze 
     
});

}, 1000);

// Free cpu usage
var freeCpu = document.createElement('div');
var desc = document.createElement('span');
desc.classList.add('description');
desc.innerText = 'Cpu Free: ';
cpu.appendChild(desc);
freeCpu.classList.add('usage');
cpu.appendChild(freeCpu);

setInterval(function() {
    os.cpuFree(function(v) {
        //console.log('Cpu free ' + v);
        freeCpu.innerHTML = Math.ceil(v * 100) + ' %';
    })
}, 1000);

// console.log(Math.round(11.4500000000000001));

// used mem
var mem = document.getElementById('mem');
var usageMem = document.createElement('div');
var memDesc = document.createElement('span');
memDesc.innerText = 'Used Mem: ';
memDesc.classList.add('description')
usageMem.classList.add('mem-usage');
mem.appendChild(memDesc);
mem.appendChild(usageMem);

setInterval(function() {
    // Mem usage
    //console.log('Free mem: ' + (os.freemem() / 1000).toFixed(1));
    usageMem.innerHTML = ((os.totalmem() - os.freemem()) / 1000).toFixed(1) + ' GB';
}, 1000);

console.log((os.totalmem() - os.freemem()) / 1000);

// freeMem percentage
var percentage = document.createElement('div');
var percentageDiv = document.createElement('span');
percentageDiv.innerText = 'Free Mem: ';
percentage.appendChild(percentageDiv);
percentageDiv.classList.add('memUsage');
percentage.classList.add('margin');
mem.appendChild(percentage);

setInterval(function() {
    // Mem usage
    //console.log('Free mem: ' + (os.freemem() / 1000).toFixed(1));
    percentage.innerHTML = ((os.freemem()) / 1000).toFixed(1) + ' GB';
}, 1000);