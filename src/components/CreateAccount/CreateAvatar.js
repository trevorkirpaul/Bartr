import React from 'react';

export default (props) => (
    <div className="createAvatarWrapper">
      <input
        type="file"
        name="inpAvatar"
        accept=".jpg, .jpeg, .png"
        onChange={props.onChangeAvatar}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          background: 'white',
          border: '1px solid black'                
          }}              
      >
          <img 
            id="avatarPreview"
            alt="avatar preview"
            style={{
              width: '100%',
              height: '100%'
            }}
          />
      </div>

    </div>
)