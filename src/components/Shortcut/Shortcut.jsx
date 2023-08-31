import React from 'react'
import PropTypes from 'prop-types';
import  { Button, Tooltip, IconButton } from '@mui/material';
import {onClickShortcut, newUrlGeneration} from '@root/utils';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';

export const Shortcut = (props) => {
  console.log("🚀 ~ file: Shortcut.jsx:8 ~ Shortcut ~ props:", props)
  const {name, pattern, id, currentTabUrl, edition, onDeletion} = props
  const transformUrl = newUrlGeneration(currentTabUrl, pattern)
  const onClick = (event) => {
    if (!edition) {
      onClickShortcut(pattern, event.altKey);
    }
  }
  const onClickDelete = () => {
    onDeletion(id)
  }

  return (
    <>
      {edition && (
        <>
          <div className="delete-shortcut-wrapper">
            <Tooltip title="Delete" className='delete-shortcut-tooltip'>
              <IconButton
                className='delete-shortcut-button'
                aria-label="Delete"
                variant="outlined"
                onClick={onClickDelete}
                size="small"
              >
                <DeleteIcon fontSize="small"/>
              </IconButton>
            </Tooltip>
          </div>
        </>
      )}
      <Button
        className={`shortcut-button ${edition ? "edition":""}`}
        title={transformUrl}
        onClick={onClick}
        variant="contained"
        size="small"
      >
        {edition && <MenuIcon className="grab-icon" fontSize="small"/>}
        {name} 
      </Button>
    </>
  )
}

Shortcut.propTypes = {
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
}