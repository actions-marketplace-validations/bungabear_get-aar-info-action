const core = require('@actions/core');
const AppInfoParser = require('app-info-parser');

async function main() {
    try {
        // inputs from action
        const aarPath = core.getInput('aarPath');

        console.log(aarPath);

        const parser = new AppInfoParser(aarPath);
        parser.parse().then(result => {

            core.setOutput("versionCode", result.versionCode);
            core.setOutput("versionName", result.versionName);
            core.setOutput("package", result.package);
            console.log('app info ----> ', result);

        }).catch(err => {
            console.log('err ----> ', err)
        });

    } catch (error) {
        console.log('catch error ----> ', error);
        core.setFailed(error.message);
    }
}


main();
