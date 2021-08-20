import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import FlipMove from 'react-flip-move'
import styles from './styles.module.css'

function GroupList({ groups, renderItem, className }) {
  return (
    <section className={classnames(styles.groupList, className)}>
      {groups.map((group) => {
        const Wrapper = group.List || FlipMove
        return (
          <section key={group.text}>
            <React.Fragment>
              {group.data && Boolean(group.data.length) && (
                <label className={styles.label}> {group.text}</label>
              )}
              {group.children}
              <div>
                <Wrapper
                  enterAnimation='fade'
                  leaveAnimation='fade'
                  duration={100}
                  {...group.listProps}
                >
                  {group.data.map(renderItem)}
                </Wrapper>
              </div>
            </React.Fragment>
          </section>
        )
      })}
    </section>
  )
}

GroupList.propTypes = {
  groups: propTypes.arrayOf(
    propTypes.shape({
      List: propTypes.any,
      text: propTypes.string,
      data: propTypes.array,
      listProps: propTypes.object
    })
  ),
  className: propTypes.string,
  renderItem: propTypes.any
}

export default GroupList
