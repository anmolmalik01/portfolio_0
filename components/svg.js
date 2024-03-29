function SVG() {
  return (
    <svg
      viewBox="0 0 100 100"
      height={200}
      width={200}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path>
        <animate
          attributeName="d"
          dur="60s"
          repeatCount="indefinite"
          keyTimes="0;
                 .0625;
                 .3125;
                 .395833333;
                 .645833333;
                 .833333333;
                 1"
          calcMode="spline"
          keySplines="0,0,1,1;
                   .42,0,1,1;
                   0,0,.58,1;
                   .42,0,.58,1;
                   .42,0,.58,1;
                   .42,0,.58,1"
          values="M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100
               50,100 50,100 0,100 0,50 0,50 0,0 Z;
                     
               M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100
               50,100 50,100 0,100 0,50 0,50 0,0 Z; 

               M 50,0 C 75,50 75,50 100,100 50,100 50,100 0,100
               12.5,75 12.5,75 25,50 37.5,25 37.5,25 50,0 Z;

               M 50,0 C 75,50 75,50 100,100 50,100 50,100 0,100
               12.5,75 12.5,75 25,50 37.5,25 37.5,25 50,0 Z;

               M 100,50 C 100,77.6 77.6,100 50,100 22.4,100 0,77.6
               0,50 0,22.4 22.4,0 50,0 77.6,0 100,22.4 100,50 Z;
                     
               M 100,50 C 100,77.6 77.6,100 50,100 22.4,100 0,77.6 
               0,50 0,22.4 22.4,0, 50,0 77.6,0 100,22.4 100,50 Z;
                     
               M 100,100 C 50,100 50,100 0,100 0,50 0,50 0,0
               50,0 50,0 100,0 100,50 100,50 100,100 Z;"
        />
        <animate
          attributeName="fill"
          dur="60s"
          repeatCount="indefinite"
          keyTimes="0;
                 .0625;
                 .3125;
                 .395833333;
                 .645833333;
                 .833333333;
                 1"
          calcMode="spline"
          keySplines="0,0,1,1;
                   .42,0,1,1;
                   0,0,.58,1;
                   .42,0,.58,1;
                   .42,0,.58,1;
                   .42,0,.58,1"
          values="#FFA400;
               #FFA400;
               #FF4E42;
               #FF4E42;
               #0CCE6B;
               #0CCE6B;
               #FFA400;"
        />
      </path>
    </svg>
  );
}

export default SVG;
