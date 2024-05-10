const Tutorials = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="container">
            <iframe
              width="500"
              height="250"
              src="https://www.youtube.com/embed/X305Er4Gwf4"
              title="Complete Fat Loss Guide"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h3 className="text-info text-center">Weigth Loss</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="container">
            <iframe
              width="500"
              height="250"
              src="https://www.youtube.com/embed/KM3ko1Z4amA?si=5J3tFBt27O3qL4Ww"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h3 className="text-info text-center">Weigth Gain</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
