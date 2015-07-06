/**
 * Created by Gitonga on 6/29/2015.
 */

/*
* traverse folders and return the innermost folder with files else return false
*
 */


var relevantFolders = function(fs,filepath){

    if(fs.isDir()){
        filepath = filepath + "/" + fs.filename();
        for(dir in fs.list()){
            return relevantFolders(dir,filepath);
        }
    }else return filepath + "/" + fs.filename();
}

