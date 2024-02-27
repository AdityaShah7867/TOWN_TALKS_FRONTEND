import React from "react";

const Map = () => {
  return (
    <div className="mapouter flex justify-center items-center">
      <div className="gmap_canvasq">
        <iframe
          width={1000}
          height={232}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
        <a href="https://textcaseconvert.com/" />
        <br />
        <a href="https://online-timer.me/" />
        <br />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".mapouter{position: relative;text-align: right;height: 212px;width: 1200px;}",
          }}
        />
        
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".gmap_canvas{overflow: hidden;background: none !important;height: 212px;width: 1200px;}",
          }}
        />
      </div>
    </div>
  );
};

export default Map;
