import React from 'react';
import styles from './UnderConst.module.css'

function UnderConst() {

  return (
    <div className={styles.container}>
        <img
                    className={styles.img}
                    src={require('./under_const.png')}
                    alt="Workflow"
        />
    </div>
  );
};

export default UnderConst;