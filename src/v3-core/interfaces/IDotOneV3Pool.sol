// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IDotOneV3PoolImmutables.sol';
import './pool/IDotOneV3PoolState.sol';
import './pool/IDotOneV3PoolDerivedState.sol';
import './pool/IDotOneV3PoolActions.sol';
import './pool/IDotOneV3PoolOwnerActions.sol';
import './pool/IDotOneV3PoolEvents.sol';

/// @title The interface for a DotOne V3 Pool
/// @notice A DotOne pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IDotOneV3Pool is
    IDotOneV3PoolImmutables,
    IDotOneV3PoolState,
    IDotOneV3PoolDerivedState,
    IDotOneV3PoolActions,
    IDotOneV3PoolOwnerActions,
    IDotOneV3PoolEvents
{

}
