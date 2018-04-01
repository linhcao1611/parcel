let options = {};
let child;

function setChildReference(childRef) {
  child = childRef;
}

function run() {
  let result = [process.pid];
  return new Promise(resolve => {
    child.addCall({
      location: '../../test/integration/workerfarm/master-process-id.js',
      args: []
    }).then((pid) => {
      result.push(pid)
      resolve(result);
    }).catch(e => console.error(e));
  });
}

function init() {
  // Do nothing
}

exports.run = run;
exports.init = init;
exports.setChildReference = setChildReference;