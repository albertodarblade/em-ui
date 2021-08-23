import React from 'react'
import styles from './styles.module.css'
import ReactImageUploader from 'react-images-uploading'
import Button from '../Button'
import IconButton from '../IconButton'

function ImageUploader({ loading, buttonText, ...props }) {
  return (
    <ReactImageUploader {...props}>
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps
      }) => (
        <div className={styles.uploadWrapper}>
          <Button
            disabled={loading}
            className={styles.field}
            isPrimaryAction
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}
          >
            {buttonText}
          </Button>
          <div className={styles.images}>
            {imageList.map((image, index) => {
              return (
                <div key={index} className={styles.imagesSection}>
                  <img
                    src={image.dataURL}
                    alt='uploaded img'
                    className={styles.image}
                  />
                  <div className={styles.imageButtons}>
                    <IconButton
                      disabled={loading}
                      className={styles.field}
                      name='edit'
                      color='primary'
                      onClick={() => onImageUpdate(index)}
                    />

                    <IconButton
                      disabled={loading}
                      className={styles.field}
                      color='danger'
                      name='delete'
                      onClick={() => onImageRemove(index)}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </ReactImageUploader>
  )
}

export default ImageUploader
