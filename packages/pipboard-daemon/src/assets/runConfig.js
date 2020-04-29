const { PipcookRunner } = require('@pipcook/pipcook-core');
const pipelineId = process.argv[2];
const runId = process.argv[3];
const runConfig = process.argv[4];
const command = process.argv[5];

if (command === 'run-pipeline') {

  (async function execute() {
    const runner = new PipcookRunner(pipelineId, runId);
    await runner.runConfig(JSON.parse(runConfig));
  })();
}


