import React from 'react';
import image1  from '../svgs/16.svg'
import image2  from '../svgs/7.svg'
import image3  from '../svgs/24.svg'
function GridLayout() {
    const parentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 'max-content', // Center vertically on the page
        margin: '0 auto', // Center horizontally
        flexDirection: 'column',
        marginTop: '300px',
        padding: '20px', // Add padding
        background:'linear-gradient(135deg, rgba(255,229,249,0.5), rgba(219,236,255,0.5) )',     
    };

    const childStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap', // Add text wrap property
    };

    const blueRectangleStyle = {
        width: '280px',
        height: '300px',
        backgroundColor:'blue',
        // backgroundImage: 'url(/public/images/1.jpg)', // Replace with your image URL
        // backgroundSize: 'cover', // Adjust this based on your image size
        borderRadius: '15px',
    };

    const columnStyle = {
        flex: 1,
        padding: '40px',
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0', // Remove margin
        padding: '10px', // Add padding for text content
    };

    // Add margin-top to the blue rectangle in the first row and first column
    const firstBlueRectangleStyle = {
        ...blueRectangleStyle,
        marginTop: '250px',
    };

    // Add margin-top to the blue rectangle in the second row and second column
    const secondBlueRectangleStyle = {
        ...blueRectangleStyle,
        marginTop: '-250px',
    };

    return (
        <div style={parentStyle}>
            <h2 style={{fontWeight: '600' ,fontSize:'40px', marginTop:'50px'}}>Individual Comprehensive care for all participant  </h2>
            <div style={childStyle}>
                <div style={columnStyle}>
                    <div style={contentStyle}>
                        <div style={firstBlueRectangleStyle}>
                            <img src={image1} alt='image1' className='image-fluid rounded-3'/>
                        </div>
                        <div style={{ marginRight: 'auto'  , marginTop:'20px' }}>
                            <h3>Self-Guided</h3>
                            <p>Self-guided programs backed by research and designed to improve emotional intelligence and well-being, both in and out of the workplace.</p>
                        </div>
                    </div>
                </div>
                <div style={columnStyle}>
                    <div style={{ width: '250px', height: '300px', backgroundColor: 'transparent' }}></div>
                </div>
                <div style={columnStyle}>
                    <div style={contentStyle}>
                        <div style={blueRectangleStyle}>
                        <img src={image2} alt='image2' className='image-fluid rounded-3'/>
                        </div>
                        <div style={{ marginRight: 'auto' , marginTop:'20px'}}>
                            <h3>Psychiatry</h3>
                            <p>Prompt evaluation and management from licensed medical prescribers who are specialized in diagnosing and treating conditions:</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={childStyle}>
                <div style={columnStyle}>
                    <div style={{ width: '250px', height: '300px', backgroundColor: 'transparent' }}></div>
                </div>
                <div style={columnStyle}>
                    <div style={contentStyle}>
                        <div style={secondBlueRectangleStyle}>
                        <img src={image3} alt='image3' className='image-fluid rounded-3'/>
                        </div>
                        <div style={{ marginRight: 'auto'  , marginTop:'20px' }}>
                            <h3>Therapy</h3>
                            <p>Emotional and behavioral support from experienced, licensed, and caring specialists can begin within the days of registration</p>
                        </div>
                    </div>
                </div>
                <div style={columnStyle}>
                    <div style={{ width: '250px', height: '300px', backgroundColor: 'transparent' }}></div>
                </div>
            </div>
        </div>
    );
}

export default GridLayout;
