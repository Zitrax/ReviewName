$( document ).ready(function() {
    // fromBranch is set internally by critic - so just use it to prefill
    if(typeof fromBranch !== 'undefined') {
	$('#branch_name').val(fromBranch);
    }

    // For summary we prefill with the summary of the first commit on the branch
    var first_sha1 = $(review_data.commit_sha1s).first();
    var first_summary = $('a[href$="' + first_sha1[0] + '"]').text()
    $('#summary').val(first_summary);
});
