// this script reads global variables set as parameters
// these variables can be set by using the --eval command
// the required global variables are - dbName, collectionName, filterSet, updateSet

var connection = new Mongo();
var db = connection.getDB(dbName);

print("\nUpdating collection " + '"' + collectionName + '" inside database ' + '"' + dbName + '"' + '...');
print("\nFiltering by: " + JSON.stringify(filterSet));
print("\nUpserting: " + JSON.stringify(updateSet) + '\n');

db[collectionName].updateMany(filterSet, {$set: updateSet});