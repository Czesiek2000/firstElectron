const os = require('os');

// root element store in variable
let root = document.getElementById('root');
let arch = document.getElementById('arch');
let info = document.getElementById('info');
let version = document.getElementById('version');
console.log(root);
root.classList.add('root');

var cpuInfo = os.cpus();
console.log(cpuInfo);
console.log(cpuInfo[1].model);

root.innerHTML = cpuInfo[1].model;

var archInfo = os.arch();
console.log(arch);
archInfoVal = `<h4>Arch version: ` + archInfo + `</h4>`;
console.log(archInfoVal);
arch.innerText = archInfoVal;

var PcInfo = [];
PcInfo.push(os.info);
PcInfo.push(os.platform);

console.log(PcInfo);
var versionInfo = `<h3>Chrome version: ` + 
process.versions.chrome + `</h3>`+ `<h3> Electron Version: ` + process.versions.electron + `</h3>` 
+ `<h3>V8 Engine: ` + process.versions.v8 +`</h3>` + `<h3> Node Version: ` + process.versions.node + `</h3>`;
version.innerHTML = versionInfo;
console.log(versionInfo);
console.log(version);
// var memInfo = os.mem;
// console.log(mem);

// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.totalmem());
// console.log("Total memory avaible: " + (bytesAvailable / 1048576) + " MB");
// console.log(os.type());
// console.log(os.platform());


console.log(process);
args = process.argv
let argsList = document.getElementById('args');
argsList.innerHTML = args[0];
for (let i = 0; i < args.length; i++) {
    const element = args[i];
    console.log(element);
}