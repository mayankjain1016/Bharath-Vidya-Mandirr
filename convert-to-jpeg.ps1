# PowerShell script to convert PNG to JPEG
Add-Type -AssemblyName System.Drawing

$sourceFolder = "c:\Users\Mayank\Bharath_Vidya_Mandir\src\assets"
$pngFiles = Get-ChildItem -Path $sourceFolder -Filter *.png -Recurse

foreach ($file in $pngFiles) {
    $image = [System.Drawing.Image]::FromFile($file.FullName)
    $newFileName = $file.FullName -replace '\.png$', '.jpeg'
    
    # Save as JPEG with quality 95
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
        [System.Drawing.Imaging.Encoder]::Quality, 95
    )
    
    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | 
        Where-Object { $_.MimeType -eq 'image/jpeg' }
    
    $image.Save($newFileName, $jpegCodec, $encoderParams)
    $image.Dispose()
    
    Write-Host "Converted: $($file.Name) -> $([System.IO.Path]::GetFileName($newFileName))"
}

Write-Host "`nConversion complete! Remember to update your imports in the code."
