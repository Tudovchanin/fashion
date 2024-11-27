

import './ButtonPanel.css'


const ButtonPanel = ({ handleIndexClick, buttonTexts, buttonStates, activeBtn }) => {

	return (
		<div className='container-btn'>


			<button className='btn' disabled={buttonStates[0]} onClick={() => handleIndexClick('prev')}>{buttonTexts[0]}</button>

			{buttonTexts[1].map((text, index) => (
        <button 
          key={index} 
          className={(activeBtn === index +1)? 'btn active-btn': 'btn'} 
          onClick={() => handleIndexClick(index + 1)} 
        >
          {text}
					
        </button>
      ))}

			<button className='btn' disabled={buttonStates[1]} onClick={() => handleIndexClick('next')}>{buttonTexts[2]}</button>
		</div>
	);
}

export default ButtonPanel;