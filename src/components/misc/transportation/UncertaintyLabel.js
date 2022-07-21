import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(100% + 0.25rem);
  left: 80%;
  display: flex;
  align-items: flex-end;
  gap: 0.375rem;

  ${(props) => props.theme.mq.small} {
    left: auto;
    right: 0;
  }
`
const Arrow = styled.svg`
  margin-bottom: 0.375rem;
  width: 1.25rem;
  height: auto;

  path {
    fill: ${(props) => props.theme.colors.second};
  }
`
const Label = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export default function UncertaintyLabel(props) {
  const { setRadiativeForcing } = useContext(ModalContext)

  return props.transportation.uncertainty ? (
    <Wrapper>
      <Arrow
        width='321'
        height='336'
        viewBox='0 0 321 336'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M69.639 4.64001L5.63905 68.64C4.14723 70.1318 2.96386 71.9029 2.1565 73.852C1.34913 75.8012 0.933582 77.8903 0.933583 80C0.933583 84.2608 2.62619 88.3471 5.63905 91.36C8.65191 94.3728 12.7382 96.0655 16.9991 96.0655C21.2599 96.0655 25.3462 94.3728 28.3591 91.36L64.999 54.72L64.9991 96C65.071 159.63 90.3798 220.633 135.373 265.626C180.366 310.619 241.369 335.928 304.999 336C309.243 336 313.312 334.314 316.313 331.314C319.313 328.313 320.999 324.243 320.999 320C320.999 315.757 319.313 311.687 316.313 308.686C313.312 305.686 309.243 304 304.999 304C249.854 303.936 196.985 282.002 157.991 243.008C118.997 204.014 97.0626 151.146 96.9991 96L96.999 54.72L133.639 91.36C136.66 94.3576 140.743 96.0397 144.999 96.0397C149.255 96.0397 153.338 94.3576 156.359 91.36C159.334 88.327 161 84.2482 161 80C161 75.7518 159.334 71.673 156.359 68.64L92.359 4.64001C89.326 1.6654 85.2473 -0.000888695 80.999 -0.00088851C76.7508 -0.000888324 72.6721 1.6654 69.639 4.64001Z' />
      </Arrow>
      <Label onClick={() => setRadiativeForcing(true)}>Incertitude</Label>
    </Wrapper>
  ) : null
}
