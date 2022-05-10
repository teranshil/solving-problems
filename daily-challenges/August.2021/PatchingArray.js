const minPatches = ( nums, n ) => {

    let count = 0, index = 0, reach = 0;

    while(reach < n) {

        if(index >= nums.length) {
            reach += reach + 1;
            count++;
        }
        else if(index < nums.length && nums[index] <= (reach + 1)) {
            reach += nums[index];
            index++;
        } else {
            reach += reach + 1;
            count++;
        }
    }

    return count;
}