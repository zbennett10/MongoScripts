// this script reads global variables within the mongo shell
// these variables can be set by using the --eval command
// the required global variables are - dbName, collectionName, filterSet, updateSet

var connection = new Mongo();
var db = connection.getDB(dbName);

print("\nUpdating document in " + collectionName + '...');
print("\nFiltering by: " + JSON.stringify(filterSet));
print("\nUpserting: " + JSON.stringify(updateSet) + '\n');

db[collectionName].updateOne(filterSet, {$set: updateSet});