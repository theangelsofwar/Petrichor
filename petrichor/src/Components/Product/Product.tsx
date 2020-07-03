import React, { useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import { load } from '@shopify/theme-sections';
import '../sections/product';

load('*');
