import BubbleCanvas from 'animation/bubbles';
// import HTMLContent from './ContentContainer/ContentContainer';
import Header from './Header';
import SearchModal from './SearchModal';

export const App = () => {
  return (
    <>
      <BubbleCanvas camera={{ position: [-100, 0, 120], fov: 70 }}>
        <Header />
        <SearchModal />
        <p>It will be </p>
        <p>something interesting </p>
        <p>here</p>
      </BubbleCanvas>
    </>
  );
};

// const Test = styled.div`
//   background-color: #3e374a;
//   font-size: 42px;
// `;
