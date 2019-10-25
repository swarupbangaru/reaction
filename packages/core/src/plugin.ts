import { Context } from '@reactant/context';
import { Plugin, Plugins } from './types';

export async function loadPlugins(context: Context): Promise<Plugins> {}

export async function loadPlugin(context: Context): Promise<Plugin> {}
