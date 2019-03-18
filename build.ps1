$buildDir = "$PSScriptRoot\build"
Remove-Item $buildDir -Recurse
New-Item -ItemType Directory -Force -Path $buildDir
Compress-Archive -Path "$PSScriptRoot\src\**" -DestinationPath "$buildDir/out.zip"