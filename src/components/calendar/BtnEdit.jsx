import React, { memo } from 'react';
import { BtnEditContainer } from '../../styled/EditStyles';

const BtnEdit = memo(({ runFunc }) => {
  return (
    <BtnEditContainer onClick={runFunc}>
      <button>수정</button>
    </BtnEditContainer>
  );
});

export default BtnEdit;