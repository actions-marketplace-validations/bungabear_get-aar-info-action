# Get AAR Info

 Get aar information,different compilation and build parameters, resulting in different aar version information

# Forked
This repository forked from [Get Apk Info](https://github.com/JantHsueh/get-apk-info-action)

And a dependency of app-info-parse also fork and edited for read aar info.

## Usage


```yaml
  - name: Get Apk Info
    id: aar
    uses: bungabaer/get-aar-info-action@v1.0.0
    with:
     aarPath: app/build/outputs/aar/app-release.aar
```


## Inputs

| Parameter  | Required | Info                                                         |
| ---------- | -------- | ------------------------------------------------------------ |
| `aarPath`  | `true`   | aar path.Default: app/build/outputs/aar/app-release.aar |


## Outputs

Output Parameter, mainly different compilation and build parameters, resulting in different aar version information.

>More information of the aar ,view the output log. If you need, you can fork and modify this project.


| Parameter   | Info                                                         |
| ----------  | ------------------------------------------------------------ |
| `versionCode`   |versionCode |
| `versionNum`   | versionNum  |
| `package`   | package |


## License

[MIT](LICENSE)
