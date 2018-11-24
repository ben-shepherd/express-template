import path from 'path'

/**
 * Clear console 
 */
export const consoleClear = () => {
    console.log('\x1Bc');
}

/**
 * Get path of view file
 * @param {*} file 
 */
export const view = (file) => {
    return path.join(__basedir, 'views', file)
}
