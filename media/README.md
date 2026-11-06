# Media

Source recordings, kept at full quality. They are not part of the build: the
site serves compressed copies from `src/assets/`.

## `ambience.wav`

The background sound that plays when Sound is turned on (#99): 151 seconds, 48
kHz, 16-bit stereo, 29 MB. The site plays it on a loop from:

| File                             | Format          | Size   | For                            |
| -------------------------------- | --------------- | ------ | ------------------------------ |
| `src/assets/audio/ambience.webm` | Opus, 64 kb/s   | 1.5 MB | Browsers that play Opus        |
| `src/assets/audio/ambience.m4a`  | AAC-LC, 96 kb/s | 1.9 MB | The rest, such as older Safari |

To make them again after changing the recording, with GStreamer:

```sh
gst-launch-1.0 filesrc location=media/ambience.wav ! wavparse ! audioconvert \
  ! audioresample ! opusenc bitrate=64000 ! webmmux \
  ! filesink location=src/assets/audio/ambience.webm
gst-launch-1.0 filesrc location=media/ambience.wav ! wavparse ! audioconvert \
  ! avenc_aac bitrate=96000 ! mp4mux faststart=true \
  ! filesink location=src/assets/audio/ambience.m4a
```

ffmpeg works as well:

```sh
ffmpeg -i media/ambience.wav -c:a libopus -b:a 64k src/assets/audio/ambience.webm
ffmpeg -i media/ambience.wav -c:a aac -b:a 96k -movflags +faststart src/assets/audio/ambience.m4a
```
