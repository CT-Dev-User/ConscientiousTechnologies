const Map = () => {
    return (
      <div id="locateUs">
        <div className="w-full md:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.3103948466196!2d77.74296310951607!3d20.89982818063696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a5b86d1eb825%3A0x7040807cb0e0b3e0!2sTechMomentum!5e0!3m2!1sen!2sin!4v1719310889730!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
        <div id="locateUs" className="hidden md:block h-[40rem] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.3103948466196!2d77.74296310951607!3d20.89982818063696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a5b86d1eb825%3A0x7040807cb0e0b3e0!2sTechMomentum!5e0!3m2!1sen!2sin!4v1719310889730!5m2!1sen!2sin"
            width="600"
            height="1000"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Map;