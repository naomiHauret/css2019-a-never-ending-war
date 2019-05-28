import React from "react"

const FullScreenVideo = (props) => {

  return <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
        dangerouslySetInnerHTML={{
          __html: `
            <video
              style="pointer-events: none; width: 100%; height: 100%; object-fit: cover;"
              controls="false"
              loop
              autoplay
              muted
              src="/static/videos/${props.name}.webm"
          />
    `
        }}
      />
}

export default FullScreenVideo