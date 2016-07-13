---
layout: default
title: article/git-intro
show_quote: false
---

you cannot use git effectively unless you are familiar with the commandline. 
listed here are all the commands you need to know to get work done.

{% highlight bash %}

    // show modified and staged files for commit
    :~$ git status

    // add modified files to the staging area
    :~$ git add [--all]

    // commit staged files, [-m] allows you to pass
    // a message (without the flag, your editor is opened)
    :~$ git commit [-m] [your_commit_message]

    // view all branches, local and remote
    :~$ git branch -a

    // view status of local repo vs remote repo
    :~$ git remote show [origin]

    // switch branches
    :~$ git checkout [branch_name]

    // use [-b] to create a new branch
    :~$ git checkout [-b] [new_branch_name]

    // merge changes from one branch into another
    // run command from the branch you want to merge into
    :~$ git merge [branch_to_get_changes_from]

{% endhighlight %}

these are just the basics.
