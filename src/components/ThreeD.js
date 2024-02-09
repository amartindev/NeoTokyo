
export const ThreeD  = () => {

  const handleMouseOver = (rotationY, rotationX, translateZ) => {
    document.querySelector('.container-character-title').style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg) translateZ(${translateZ + 100}px)`;
    document.querySelector('.container-character-image').style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg) translateZ(${translateZ - 20}px)`;
    document.querySelector('.container-vector-plano-01').style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg) translateZ(${translateZ * -1}px)`;
    document.querySelector('.container-vector-plano-02').style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg) translateZ(${translateZ - 40}px)`;
    document.querySelector('.container-vector-plano-03').style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg) translateZ(${translateZ + 100}px)`;
  };

  const handleMouseOut = () => {
    document.querySelector('.container-character-title').style.transform = 'translateZ(110px)';
    document.querySelector('.container-character-image').style.transform = 'translateZ(80px)';
    document.querySelector('.container-vector-plano-01').style.transform = 'translateZ(-100px)';
    document.querySelector('.container-vector-plano-02').style.transform = 'translateZ(60px)';
    document.querySelector('.container-vector-plano-03').style.transform = 'translateZ(200px)';

  };

  document.querySelector('.grid.top-left').addEventListener('mouseover', function () {
    handleMouseOver(-5, 5, 100);
  });
  document.querySelector('.grid.top-right').addEventListener('mouseover', function () {
    handleMouseOver(5, 5, 100);
  });
  document.querySelector('.grid.bottom-left').addEventListener('mouseover', function () {
    handleMouseOver(-5, -5, 100);
  });
  document.querySelector('.grid.bottom-right').addEventListener('mouseover', function () {
    handleMouseOver(5, -5, 100);
  });

  document.querySelector('.grid.top-left').addEventListener('mouseout', handleMouseOut);
  document.querySelector('.grid.top-right').addEventListener('mouseout', handleMouseOut);
  document.querySelector('.grid.bottom-left').addEventListener('mouseout', handleMouseOut);
  document.querySelector('.grid.bottom-right').addEventListener('mouseout', handleMouseOut);
}

