const os = require('os');
const cp = require('child_process');

const container = document.querySelector('.container');

const cpu = os.cpus();

// cpu model
const model = cpu[0].model;

// cpu speed 
const speed = cpu[0].speed;

// arch version
const arch = os.arch();

// homedir
const home = os.homedir();

// host name
const host = os.hostname();

// platform
const platform = os.platform();

// release
const release = os.release();

// total mem
let totalmem = os.totalmem();
totalmem = `${(totalmem * 0.000000001).toFixed(2)} GB`
// console.log();

// free mem
let freemem = os.freemem();
freemem = `${(freemem * 0.000000001).toFixed(2)} GB`
// console.log();

// type
const type = os.type();

// uptime
const uptime = os.uptime();

// username
const username = os.userInfo().username;

// Template to display on screen
let output = "";
output += `<p>Model: ${model}</p>
<p>Speed: ${speed} GHz</p>
<p>Arch version: ${arch}</p>
<p>Platform: ${platform}</p>
<p>Release: ${release}</p>
<p>Total mem: ${totalmem}</p>
<p>Freemem: ${freemem}</p>
<p>System: ${type}</p>
<p>Home: ${home}</p>
<p>PC name: ${host}</p>
<p>Username: ${username}</p>
`

// Change value of uptime to day, hour, minute, second
function convert(ms) {
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d,
        h: h,
        m: m,
        s: s
    };
};

// Add computer uptime to template
let value = "";
value += `${convert(uptime).d} : ${convert(uptime).h} : ${convert(uptime).m} : ${convert(uptime).s}`;
output += `<p>Uptime: ${value}</p>`;

if (os.platform() === "win32") {
    cp.exec("wmic path win32_VideoController get name", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        container.innerHTML += `<p>Graphics: ${stdout.substr(4, stdout.length)}</p>`
    })    
    
}else {
    output += `<p>Graphics undefined implemented for Windows 10</p>`
}


// Display template on screen
container.innerHTML = output;