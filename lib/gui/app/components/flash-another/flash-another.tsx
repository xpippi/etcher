/*
 * Copyright 2019 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';

import { BaseButton } from '../../styled-components';
import * as i18next from 'i18next';

export interface FlashAnotherProps {
	onClick: () => void;
}

export const FlashAnother = (props: FlashAnotherProps) => {
	return (
		<BaseButton primary onClick={props.onClick}>
			{i18next.t('flash.another')}
		</BaseButton>
	);
};
