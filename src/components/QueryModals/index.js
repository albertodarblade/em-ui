import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import useHistory from '../../hooks/useHistory'
function QueryModals({ modals }) {
  const [, { hasQuery, mergeQuery }] = useHistory()
  return (
    <React.Fragment>
      {modals.map((modal) => {
        return (
          <Dialog
            key={modal.query}
            open={hasQuery(modal.query)}
            onClose={() => mergeQuery({ [modal.query]: undefined })}
            {...modal.props}
          >
            {modal.renderContent}
          </Dialog>
        )
      })}
    </React.Fragment>
  )
}

QueryModals.defaultProps = {
  modals: []
}

export default QueryModals
